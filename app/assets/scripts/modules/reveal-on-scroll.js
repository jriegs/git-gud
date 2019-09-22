import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.forEach((item) => {
            item.classList.add('reveal-item');
        });
    }

    createWaypoints() {
        this.itemsToReveal.forEach((item) => {
            new Waypoint({
                element: item,
                handler: function() {
                    item.classList.add('reveal-item--visible');
                },
                offset: "75%"
            });
        });
    }

}

export default RevealOnScroll;