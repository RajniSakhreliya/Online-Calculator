// -----------------global functions-----------------------------

// getSiblings, getClosest, slideUp, slideDown, slideToggle :- mobile navigation and navbar for header
export const getSiblings = function (elem) {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

export const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};

export const slideUp = (element, duration = 500) => {
    return new Promise(function (resolve) {
        element.style.height = element.offsetHeight + "px";
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        // element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(function () {
            element.style.display = "none";
            element.style.removeProperty("height");
            element.style.removeProperty("padding-top");
            element.style.removeProperty("padding-bottom");
            element.style.removeProperty("margin-top");
            element.style.removeProperty("margin-bottom");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
            resolve(false);
        }, duration);
    });
}

export const slideDown = (element, duration = 500) => {
    return new Promise(function () {
        element.style.removeProperty("display");
        let display = window.getComputedStyle(element).display;

        if (display === "none") display = "block";

        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        // element.offsetHeight;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        element.style.height = height + "px";
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        window.setTimeout(function () {
            element.style.removeProperty("height");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
        }, duration);
    });
}

export const slideToggle = (element, duration = 500) => {
    if (window.getComputedStyle(element).display === "none") {
        return slideDown(element, duration);
    } else {
        return slideUp(element, duration);
    }
}

// export const decryptAnswer = (encrypted_json_string, key) => {
// let obj_json = encrypted_json_string;
// let encrypted = obj_json.ciphertext;
// let iv = cryptoJs.enc.Hex.parse(obj_json.iv);
// key += "0000";
// key = cryptoJs.enc.Utf8.parse(key);
// try {
//     let decrypted = cryptoJs.AES.decrypt(encrypted, key, {
//         iv: iv,
//     }).toString(cryptoJs.enc.Utf8);
//     return decrypted;
// } catch (error) {
//     console.log(error);
// }
// }

//scrollhandler in mobile device
export const scrollhandler = (top) => {
    const scrollTohowItWorks = () =>
        window.scroll({
            top: top,
            left: 0,
            behavior: "smooth",
        });
    if (window.innerWidth <= 600) {
        scrollTohowItWorks();
    }
    return false;
}

// server image error
export const imgError = (e) => {
    e.target.src = "/images/user.svg"
}


export function getCurrencySymbol() {
    return "₹";
}