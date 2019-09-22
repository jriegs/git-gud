import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
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
            var currentItem = this;
            new Waypoint({
                element: item,
                handler: function() {
                    item.classList.add('reveal-item--visible');
                },
                offset: currentItem.offsetPercentage
            });
        });
    }

}

export default RevealOnScroll;