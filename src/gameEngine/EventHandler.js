export class EventHandler {
    map = null;
    event = null;

    setMap(map) {
        this.map = map;
    }

    setEvent(event) {
        this.event = event;
    }

    stand(resolve) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(this.event.type, this.map, this.event.direction, this.event.time);

        const completeHandler = e => {
            if (e.detail.whoId === this.event.who) {
                document.removeEventListener(
                    'PersonStandComplete',
                    completeHandler
                );
                resolve();
            }
        }

        document.addEventListener('PersonStandComplete', completeHandler)
    }

    walk(resolve) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(this.event.type, this.map, this.event.direction);

        const completeHandler = e => {
            if (e.detail.whoId === this.event.who) {
                document.removeEventListener(
                    'PersonWalkingComplete',
                    completeHandler
                );
                resolve();
            }
        }

        document.addEventListener('PersonWalkingComplete', completeHandler)
    }

    init() {
        return new Promise(resolve => {
            // so type === "walk"
            // we fire this.walk(resolve)
            this[this.event.type](resolve)
        })
    }
}