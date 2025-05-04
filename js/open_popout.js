function open_popout() {
    const width = 400
    var leftBoundry = window.screen.width - width;
    if (window.screenX < 0) {
        leftBoundry = -width;
    }
    else if (window.screenX > 0) {
        leftBoundry = window.screenX + (window.screen.width - width);
    }
    window.open("popout.html", undefined, `noopener, popup, resizable=false, width=${width}, height=600, left=${leftBoundry}, top=${50}`);
    //window.close();
}