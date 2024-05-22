window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionend', function() {
        document.body.removeChild(loader);
    });
});
window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.gameFrame = document.querySelector('.game-frame');
    window.gameFrame.addEventListener('contextmenu', event => event.preventDefault());
});
function changeVersion(version) {
    var friendlyVersion = version.replace('latest', 'Latest Release (1.8.8)').replace('classic', 'Classic').replace('ms-Classic', 'Classic (Microsoft Recreation)').replace('beta-1.3', 'Beta 1.3').replace('alpha-1.2.6', 'Alpha 1.2.6').replace('dragonx-client', 'DragonX Client').replace('resent', 'Resent Client').replace('optifine', 'Shadow Client').replace('flame', 'Flame Client');
    document.querySelector('.version-btn').innerText = friendlyVersion;
    if(localStorage.getItem('cloakTab')!=='true'){document.title='WebMC Launcher | '+friendlyVersion};
    window.currentVersion = version.replace('latest', '1.8.8').replace('Classic', 'classic').replaceAll(' ', '-').replace('Indev', 'indev').replace('Paper', 'paper');
}
function gameFrameLoad(iframe) {
    iframe.contentWindow.focus();
}
function playGame() {
    const playBtn = document.querySelector('.play-btn');
    playBtn.classList.add('play-btn-running');
    playBtn.innerHTML = 'STOP';
    playBtn.setAttribute('onclick', 'stopGame()');
    if (!window.currentVersion || window.currentVersion == null) {
        changeVersion('latest');
    }
    document.querySelector('.game-frame').src = `/mc/${window.currentVersion}`;
    document.getElementById('fullscreen-btn').style.visibility = 'visible';
    document.getElementById('aboutBlank-btn').style.visibility = 'visible';
    setTimeout(function() {
        document.getElementById('fullscreen-btn').style.opacity = '1';
        document.getElementById('aboutBlank-btn').style.opacity = '1';
    }, 100);
}
function stopGame() {
    window.gameFrame.src = "about:blank";
    window.gameFrame.onload = function() {
        if (window.gameFrame.contentWindow.location.href.includes("about:blank")) {
            if(localStorage.getItem('cloakTab')!=='true'){document.title='WebMC Launcher'}
            const playBtn = document.querySelector('.play-btn');
            playBtn.classList.remove('play-btn-running');
            playBtn.innerHTML = 'PLAY';
            playBtn.setAttribute('onclick', 'playGame()');
            const fullscreenBtn = document.getElementById('fullscreen-btn');
            const aboutBlankBtn = document.getElementById('aboutBlank-btn');
            fullscreenBtn.style.opacity = '0';
            aboutBlankBtn.style.opacity = '0';
            setTimeout(function() {
                if (window.gameFrame.contentWindow.location.href.includes(location.origin + "/blank.html")) {
                    fullscreenBtn.style.visibility = 'hidden';
                    aboutBlankBtn.style.visibility = 'hidden';
                }
            }, 2000);
        }
    }
}
function openAboutBlankWindow(version) {
    const newAboutBlankWindow = window.open('about:blank');
    const iframe = document.createElement('iframe');
    newAboutBlankWindow.document.body.style.margin = '0';
    newAboutBlankWindow.document.body.style.height = '100vh';
    newAboutBlankWindow.document.title = 'about:blank';
    iframe.src = `/mc/${version}`;
    iframe.style.border = 'none';
    iframe.border = '0';
    iframe.style.left = 0;
    iframe.style.top = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.allow = "fullscreen";
    iframe.referrerpolicy = "no-referrer";
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.setAttribute('onload', 'this.contentWindow.focus()');
    newAboutBlankWindow.document.body.appendChild(iframe);
}
function openInNewTab() {
    window.open(location.origin + `/mc/${window.currentVersion}`, '_blank');
}
function openFullscreen() {
    var gameFrame = document.querySelector('.game-frame');
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) {
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
        gameFrame.msRequestFullscreen();
    }
    gameFrame.contentWindow.focus();
}
function exitFullscreen() {
    document.exitFullscreen();
}
function isFullscreen() {
    return document.fullscreenElement != null;
}
function toggleFullscreen() {
    if (isFullscreen()) {
        exitFullscreen();
    } else {
        openFullscreen();
    }
}
function writeError(error) {
    document.write(error);
}
function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
if (isMobile()) {
    alert('Please visit this page from a proper desktop/laptop computer!');
    location.href='about:blank';
}
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});