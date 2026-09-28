const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function mobileMenuTypewriter() {

    // Logic updated: Links par click karne se menu band nahi hoga, naya page load hone par khud hi khatam ho jayega.
    (function () {
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const hamburgerIcon = document.getElementById('hamburgerIcon');
        const closeIcon = document.getElementById('closeIcon');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeBtn = document.getElementById('mobileMenuCloseBtn');
        const body = document.body;

        if (!mobileMenuButton || !mobileMenu) return;

        function openMenu() {
            mobileMenu.classList.remove('hidden');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            body.classList.add('overflow-hidden');
        }

        function closeMenu() {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            body.classList.remove('overflow-hidden');
        }

        mobileMenuButton.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
        });

        mobileMenuButton.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }

        // Background click par close karne ke liye
        mobileMenu.addEventListener('click', function (e) {
            if (e.target === mobileMenu) closeMenu();
        });
        
        // NOTE: link click listener (closeMenu) has been removed to prevent flicking to home page.
    })();

// Responsive Typewriter Effect
const typewriterLayouts = {
    mobile: [
        "Think Tank for Urban and Regional Development,",
        "Natural Resources and Consumer Policy",
    ],

    tablet: [
        "Think Tank for Urban and Regional Development, Natural",
        "Resources and Consumer Policy"
    ],

    desktop: [
         "Think Tank for Urban and Regional Development, Natural Resources",
        "and Consumer Policy"
    ]
};

const typeLines = [
    document.getElementById('typeLine1'),
    document.getElementById('typeLine2'),
    document.getElementById('typeLine3')
];

let currentLayout = '';
let currentTextParts = [];
let currentPart = 0;
let currentCharacter = 0;

let typingTimer = null;
let restartTimer = null;
let resizeTimer = null;

function getTypewriterLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
        return 'mobile';
    }

    if (screenWidth < 1024) {
        return 'tablet';
    }

    return 'desktop';
}

function clearTypewriterTimers() {
    clearTimeout(typingTimer);
    clearTimeout(restartTimer);
}

function setActiveTypewriterLine(activeIndex) {
    typeLines.forEach((line, index) => {
        if (!line) {
            return;
        }

        line.classList.toggle(
            'is-typing',
            index === activeIndex
        );
    });
}

function startTypewriter() {
    clearTypewriterTimers();

    currentLayout = getTypewriterLayout();
    currentTextParts =
        typewriterLayouts[currentLayout];

    currentPart = 0;
    currentCharacter = 0;

    typeLines.forEach((line, index) => {
        if (!line) {
            return;
        }

        line.textContent = '';

        line.style.display =
            index < currentTextParts.length
                ? 'block'
                : 'none';

        line.classList.remove('is-typing');
    });

    typeText();
}

function typeText() {
    const activeLine =
        typeLines[currentPart];

    const activeText =
        currentTextParts[currentPart];

    if (!activeLine || activeText === undefined) {
        return;
    }

    setActiveTypewriterLine(currentPart);

    currentCharacter++;

    activeLine.textContent =
        activeText.slice(
            0,
            currentCharacter
        );

    if (currentCharacter < activeText.length) {
        typingTimer = setTimeout(
            typeText,
            70
        );

        return;
    }

    if (
        currentPart <
        currentTextParts.length - 1
    ) {
        currentPart++;
        currentCharacter = 0;

        typingTimer = setTimeout(
            typeText,
            180
        );

        return;
    }

    setActiveTypewriterLine(
        currentTextParts.length - 1
    );

    restartTimer = setTimeout(
        startTypewriter,
        8000
    );
}

window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
        const newLayout =
            getTypewriterLayout();

        if (newLayout !== currentLayout) {
            startTypewriter();
        }
    }, 150);
});

startTypewriter();

    // Scroll Header Effect
    document.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) { header.classList.add("scrolled"); } 
        else { header.classList.remove("scrolled"); }
    });

}
