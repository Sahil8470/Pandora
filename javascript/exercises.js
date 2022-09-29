// for a clickable logo
document.querySelector("#logo").onclick = function () {
    location.href = "../index.html";
};

const hidden = [".li1", ".li2", ".li3", ".li4", ".li5"];
const hiddenContent = [
    "#hidden-content-1",
    "#hidden-content-2",
    "#hidden-content-3",
    "#hidden-content-4",
    "#hidden-content-5",
];
// 1st hidden content
document.querySelector(hidden[0]).onmouseover = function () {
    mouseOver1();
};
document.querySelector(hidden[0]).onmouseout = function () {
    mouseOut1();
};

function mouseOver1() {
    document.querySelector(hiddenContent[0]).classList.remove("hide");
}
function mouseOut1() {
    document.querySelector(hiddenContent[0]).classList.add("hide");
}

// 2nd hidden content
document.querySelector(hidden[1]).onmouseover = function () {
    mouseOver2();
};
document.querySelector(hidden[1]).onmouseout = function () {
    mouseOut2();
};

function mouseOver2() {
    document.querySelector(hiddenContent[1]).classList.remove("hide");
}
function mouseOut2() {
    document.querySelector(hiddenContent[1]).classList.add("hide");
}

// 3rd hidden content
document.querySelector(hidden[2]).onmouseover = function () {
    mouseOver3();
};
document.querySelector(hidden[2]).onmouseout = function () {
    mouseOut3();
};

function mouseOver3() {
    document.querySelector(hiddenContent[2]).classList.remove("hide");
}
function mouseOut3() {
    document.querySelector(hiddenContent[2]).classList.add("hide");
}

// 4th hidden content
document.querySelector(hidden[3]).onmouseover = function () {
    mouseOver4();
};
document.querySelector(hidden[3]).onmouseout = function () {
    mouseOut4();
};

function mouseOver4() {
    document.querySelector(hiddenContent[3]).classList.remove("hide");
}
function mouseOut4() {
    document.querySelector(hiddenContent[3]).classList.add("hide");
}

// 5th hidden content
document.querySelector(hidden[4]).onmouseover = function () {
    mouseOver5();
};
document.querySelector(hidden[4]).onmouseout = function () {
    mouseOut5();
};

function mouseOver5() {
    document.querySelector(hiddenContent[4]).classList.remove("hide");
}
function mouseOut5() {
    document.querySelector(hiddenContent[4]).classList.add("hide");
}
