function open_popout() {
    var leftBoundry = window.screen.width - 412;
    if (window.screenX < 0) {
        leftBoundry = -412;
    }
    window.open("popout.html", undefined, `noopener, popup, width=402, height=666, left=${leftBoundry}, top=${50}`);
    window.close();
}