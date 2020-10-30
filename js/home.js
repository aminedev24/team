var area = document.getElementById("area"),
    sbtn = document.getElementById("submit"),
    previewBox = document.getElementById("previewBox"),
    previewImg = document.getElementById("img-preview"),
    photoBtn = document.getElementById("photo/video"),
    posts = document.getElementById("posts"),
    upload = document.getElementById("up-btn"),
    store = "";
(counter = 1), (num = 0);
var bell = document.querySelector(".bell");

var name = document.querySelector(".name").innerText,
    details = document.querySelector(".details"),
    canvas = document.querySelector('canvas'),

    letter = name.substr(0, 1);
    profile = document.querySelector('.post .profile_image');

const colors = ["darkcyan", "darkgreen", "darkslateblue", "orange", "aqua", "teal", "steelblue", "slategrey", "cadetblue", "cornflowerblue"];
function getRandomColor() {
    const random = Math.floor(Math.random() * colors.length);
    //console.log(colors[random]);
    canvas.style.backgroundColor = colors[random]
    if(profile!= undefined){
        profile.style.backgroundColor = colors[random]
    
    }
    

}

function createCanvas() {
    wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    var span = document.createElement("span");
    span.innerText = letter;
    span.setAttribute("class", "letter");
    canvas = document.createElement("canvas");
    canvas.setAttribute("class", "sidenav-cnt profile_image");
    wrapper.append(span, canvas);
    details.prepend(wrapper);
    wrapperClone = wrapper.cloneNode(true);
    //console.log(wrapperClone)
}
/*
window.onload = () => {
    createCanvas();
    getRandomColor();
};
*/
bell.addEventListener("click", dropDown, false);
//dropbtn.addEventListener("click", dropDown, false);
var modal = document.getElementById("modal"),
    modalImg = document.querySelector(".modalImage"),
    modalTitle = document.querySelector(".modalTitle");
var modalClone = modal.cloneNode(true);
var cls = modalClone.setAttribute("class", "clone");
var date = new Date();

var hashReg = /(^|\W)(#[a-z\d][\w-]*)/gi;
var dollarReg = /(^|\s)\$[a-zA-Z0-9][\w-]*\b/g;
var nopr = document.querySelector(".nopr");
notifPrs = document.querySelector("div.notifPrs");

function dropDown(e) {
    if (e.currentTarget) {
        e.currentTarget.parentElement.lastElementChild.classList.toggle("show");
    } else {
        e.currentTarget.parentElement.lastElementChild.classList.toggle("show");
    }
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

photoBtn.addEventListener("click", function () {
    upload.click();
});

upload.onchange = function () {
    var file = this.files;

    if (file.length > 0) {
        var fileReader = new FileReader();
        previewBox.style.display = "block";
        previewImg.style.display = "block";
        fileReader.onload = function (e) {
            previewImg.setAttribute("src", e.target.result);
        };

        fileReader.readAsDataURL(file[0]);
    } else {
        previewBox.style.display = "";
        previewImg.style.display = "";
        previewImg.setAttribute("src", "");
    }
};

sbtn.onclick = function (e) {
    e.preventDefault();
    submit();
};

area.onkeyup = function (e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        submit();
    }
};

function submit() {
    var file = upload.files;

    var fileReader = new FileReader();

    if (file.length > 0 && area.value != 0) {
        withImage();
    } else if (area.value == 0 && file.length > 0) {
        imageOnly();
    } else if (area.value != 0 && file.length == 0) {
        withoutImage();
    } else {
        previewBox.style.display = "";
        previewImg.style.display = "";
        previewImg.setAttribute("src", "");
    }
}

function withImage() {
    var file = upload.files;

    var fileReader = new FileReader();

    fileReader.onload = function (e) {
        //console.log(file.result);
        //previewImg.setAttribute('src', event.target.result);

        createElems(null, e);
        checkAtt();

        selectElements();

        //modalImg(modalTitle.innerText =  postPr.innerText);
        previewBox.style.display = "";
        previewImg.src = "";
        upload.value = "";
    };

    fileReader.readAsDataURL(file[0]);
}

function imageOnly() {
    var file = upload.files;

    var fileReader = new FileReader();

    fileReader.onload = function (e) {
        createElems(false, e);
        selectElements();
        checkAtt();
        previewBox.style.display = "";
        previewImg.src = "";
        upload.value = "";
    };
    fileReader.readAsDataURL(file[0]);
}

function withoutImage() {
    createElems(true);
    selectElements();
    checkAtt();
}

function modalImage(e, param) {
    if (e.currentTarget) {
        var att = e.currentTarget.getAttribute("src");
        modalClone.children[1].setAttribute("src", att);
        modalClone.style.visibility = "visible";
        e.currentTarget.parentElement.prepend(modalClone);
        var del = document.querySelector(".close");
        del.addEventListener("click", hideModal, false);

        if (modalImg.childElementCount > 1) {
            modalImg.lastElementChild.remove();
        }
        if (param == true) {
            postPr = document.querySelector(".postPr").cloneNode(true);
            modalTitle = document.querySelector("div.modalTitle");
            modalClone.children[2].firstElementChild.innerText = postPr.innerText;
        }
        //alert('image clicked');
    }
    e.stopPropagation();
}

function hideModal(e) {
    if (e.currentTarget) {
        e.currentTarget.offsetParent.style.visibility = "hidden";
    }
}
function addComment(e) {
    if (e.keyCode == 13 && e.currentTarget.value != 0) {
        var div = document.createElement("div");
        div.setAttribute("class", "commentContent");
        div.style.display = "flex";

        //secondClone =  menuClone.cloneNode(true);
        var imgpf = document.querySelector(".imgpf").cloneNode();
        var name = document.querySelector(".name").cloneNode(true);
        var menuClone = document.querySelector("div.menu").cloneNode(true);
        popClone = document.querySelector("div.pop").cloneNode(true);
        tooltipClone = document.querySelector("div.tooltip").cloneNode();

        //menuClone.children[3].firstElementChild.innerText = 'Delete Comment';
        var tpclone = document.querySelector("div.tooltip").cloneNode(true);
        tpclone.firstElementChild.classList.add("time");

        var p = document.createElement("p");
        p.setAttribute("class", "commentPr");
        p.innerText = e.currentTarget.value;
        if (p.innerText.length > 45) {
            p.style = "top:19px";
        }
        hash = p.innerText.match("#");
        if (hash) {
            repHash();
        }

        div.append(imgpf, name, menuClone, popClone, tpclone, p);

        divClone = div.cloneNode(true);
        e.currentTarget.parentElement.nextElementSibling.append(div);

        e.currentTarget.value = "";
        commentPr = document.querySelectorAll(".commentPr");
        commentPr.forEach((pr) => {
            hash = pr.innerText.match("#");
            if (hash) {
                repHash();
            }
        });
        commentNotif(e);
        selectElements(true);
    }
    e.stopPropagation();
}

function commentMenu(e) {
    if (e.currentTarget) {
        //e.currentTarget.parentElement.style.display = 'flex';
        e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = "flex";
    }
}

function showComent(e) {
    if (e.currentTarget) {
        switch (e.currentTarget.parentElement.nextElementSibling.style.display) {
            case "":
                //console.log(comments);
                e.currentTarget.parentElement.nextElementSibling.style.display = "block";
                e.currentTarget.parentElement.nextElementSibling.firstElementChild.focus();

                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.display = "block";

                break;
            case "block":
                e.currentTarget.parentElement.nextElementSibling.style.display = "";

                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
                break;
        }
    }
}

function commentNotif(e) {
    if (nopr != null) {
        nopr.remove();
    }
    var notifContainer = "<div class='notifContainer'>";
    //pfClone = document.querySelector(".imgpf").cloneNode(true);
   // notifContainer+= wrapperClone;
    notifContainer += "<img src=" + pfClone.getAttribute("src") + " class='imgpf'>";
    nameClone = document.querySelector(".name").cloneNode(true);
    notifContainer += "<p id='pr' class='notifPr pr'><span class='name'>" + nameClone.innerText + "</span> commented on your post: </p>";
    notifContainer += "<a href='#' class='redirect'>" + e.currentTarget.offsetParent.children[6].innerText + "</a>";

    notifContainer += "<div>";

    notifPrs.innerHTML += notifContainer;

    var num = document.querySelector(".num");
    num = num.innerText = notifPrs.childElementCount;
}
function notif(e) {
    if (e.currentTarget.offsetParent.children[6].nodeName == "P") {
        if (nopr != null) {
            nopr.remove();
        }

        displayNotif(e, true);

        //double = true;
    } else {
        if (nopr != null) {
            nopr.remove();
        }
        displayNotif(e);
    }

    var redirect = document.querySelectorAll("a.redirect");
    redirect.forEach((redi) => {
        if (redi != undefined && redi.innerText.length > 25) {
            res = redi.innerText.substr(0, 20);
            res += ".....";
            redi.innerHTML = res;
        }
    });
    notifImg = document.querySelector(".notifImg");

    var num = document.querySelector(".num");
    num = num.innerText = notifPrs.childElementCount;
}

function displayNotif(e, type) {
    if (type == true) {
        if (!post1.liked) {
            notifContainer = "<div class='notifContainer'>";
            //pfClone = document.querySelector(".imgpf").cloneNode(true);
            pfClone = document.querySelector(".profile_image").cloneNode(true)
           // notifContainer += "<img src=" + pfClone.getAttribute("src") + " class='imgpf'>";
            nameClone = document.querySelector(".name").cloneNode(true);
            
            notifContainer += "<div>";
            notifContainer += "<p id='pr' class='notifPr pr'><span class='name'>" + nameClone.innerText + "</span> liked your post: </p>";
            notifContainer += "<a href=" + "#" + e.currentTarget.offsetParent.children[6].id + " class='redirect'>" + e.currentTarget.offsetParent.children[6].innerText + "</a>";
            notifContainer += "</div>";
            notifPrs.innerHTML += notifContainer;

        }
        container = document.querySelector('.notifContainer')
        container.prepend(wrapperClone)
        //console.log(post1);
    } else {
        if (!post1.liked) {
            notifContainer = "<div class='notifContainer'>";
            //pfClone = document.querySelector(".imgpf").cloneNode(true);
          //  notifContainer += "<img src=" + pfClone.getAttribute("src") + " class='imgpf'>";
            nameClone = document.querySelector(".name").cloneNode(true);
            notifContainer += "<div>";
            notifContainer +=
                "<p class='notifPr pr'><span class='name'>" + nameClone.innerText + "</span>  liked your <a style='display:unset;' class='redirect' href=" + "#" + e.currentTarget.offsetParent.children[6].id + ">image</a> </p>";

            //notifContainer+="<a href="+'#'+e.currentTarget.offsetParent.children[6].id+" class='redirect'>"+image+"</a>";
            notifContainer += "</div>";
            notifPrs.innerHTML += notifContainer;
        }
    }
}

post1 = {
    liked: null,
};

function liked(e) {
    if (e.currentTarget) {
        switch (e.currentTarget.innerText) {
            case "like":
                e.currentTarget.innerText = "liked";

                notif(e);

                //double = true
                post1 = {
                    liked: true,
                };
                break;
            case "liked":
                e.currentTarget.innerText = "like";

                break;
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function postMenu(e) {
    if (e.currentTarget) {
        e.currentTarget.lastElementChild.classList.toggle("show");
        //console.log(e.currentTarget.lastElementChild)
    }
}

function showConfirmMenu(e) {
    if (e.currentTarget) {
        e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = "flex";
    }
}

function deletePost(e) {
    if (e.target == e.currentTarget.firstElementChild) {
        e.currentTarget.offsetParent.offsetParent.remove();
        e.currentTarget.parentElement.style.display = "none";
    } else {
        e.currentTarget.parentElement.style.display = "none";
    }
}

var events = ["keyup", "mouseleave"];
function selectElements(comments, modal) {
    post = document.querySelectorAll("div.post");
    menu = document.querySelectorAll("div.menu");
    
    /*
    post.forEach((post)=>{
        post.prepend(wrapperClone);
    })
    */
    menu.forEach((menu) => {
        menu.addEventListener("click", postMenu, false);
    });

    remove = document.querySelectorAll("span.remove");
    remove.forEach((remove) => {
        remove.addEventListener("click", showConfirmMenu, false);
    });

    remove.forEach((cls) => {
        switch (cls.parentElement.parentElement.offsetParent.className) {
            case "commentContent":
                cls.innerText = "Delete comment";
                break;
        }
    });

    confirmBtn = document.querySelectorAll("div.confirmBtn");

    confirmBtn.forEach((confirmBtn) => {
        confirmBtn.addEventListener("click", deletePost, false);
    });

    commentArea = document.querySelectorAll(".commentArea");
    commentArea.forEach(function (ca) {
        ca.addEventListener("keyup", addComment, false);
    });

    var like = document.querySelectorAll("div.option button[id='like']");
    like.forEach(function (btn) {
        btn.addEventListener("click", liked, false);
    });

    var commentBtn = document.querySelectorAll("div.option button[id='commentBtn']");
    commentBtn.forEach(function (cmt) {
        cmt.addEventListener("click", showComent, false);
    });

    imgPost = document.querySelectorAll("div.post img[class='imgpost']");

    imgPost.forEach(function (img) {
        img.addEventListener("click", modalImage, true);
    });

    //popClone.addEventListener('click', deleteComment, false);

    when = document.querySelectorAll("span.when");

    when.forEach((elem) => {
        elem.innerText = "On: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    });

    tooltiptext = document.querySelectorAll("span.tooltiptext");

    tooltiptext.forEach((tlt) => {
        tlt.innerText = date.getHours() + ":" + date.getMinutes();
    });

    if (comments) {
        var mclone = document.querySelectorAll(".commentContent .menu");

        mclone.forEach((mc) => {
            mc.addEventListener("click", postMenu, false);
            //console.log(  mc.children[3].firstElementChild)
        });
        var thing = document.querySelectorAll(".commentContent .remove");
        thing.forEach((rm) => {
            rm.addEventListener("click", commentMenu, false);
        });
    }

    postPr = document.querySelectorAll(".postPr");

    postPr.forEach((pr) => {
        events.forEach((event) => {
            pr.addEventListener(event, (e) => {
                if (e.keyCode == 13) {
                    pr.contentEditable = false;
                    hash = pr.innerText.match("#");

                    if (hash) {
                        repHash();
                    }
                } else if (event == "mouseleave") {
                    pr.contentEditable = false;
                } else if (e.keyCode == 32) {
                    tag = document.querySelector(".hash");
                    tag.contentEditable = false;
                    tag.innerHTML += "&nbsp;";
                    //hash.contentEditable == false;
                }
            });
        });
        hash = pr.innerText.match("#");

        if (hash) {
            repHash();
        }
    });

    edit = document.querySelectorAll(".edit");
    edit.forEach((edit) => {
        edit.addEventListener("click", editPost, false);

        switch (edit.parentElement.parentElement.offsetParent.className) {
            case "commentContent":
                edit.classList.replace("edit", "editComment");
                edit.innerText = "Edit comment";
                edit.addEventListener("click", editPost, false);
                break;
        }
    });
}

function editPost(e) {
    if (e.currentTarget && e.currentTarget.parentElement.parentElement.offsetParent.className == "post") {
        postPr.forEach((pr) => {
            pr.contentEditable = true;
            pr.focus();
        });
    } else {
        commentPr.forEach((pr) => {
            pr.contentEditable = true;
            pr.focus();
            pr.onmouseleave = () => {
                pr.contentEditable = false;
            };
            pr.onkeyup = (e) => {
                if (e.keyCode == 13) {
                    pr.contentEditable = false;
                } else if (e.keyCode == 32) {
                    hash.contentEditable == false;
                }
            };
        });
    }
}

function repHash() {
    postPr = document.querySelectorAll(".postPr");
    commentPr = document.querySelectorAll(".commentPr");
    postPr.forEach((pr) => {
        pr.innerHTML = pr.innerText.replace(hashReg, "$1<span class='hash'>$2</span>");
    });

    commentPr.forEach((pr) => {
        pr.innerHTML = pr.innerText.replace(hashReg, "$1<span class='hash'>$2</span>");
    });
}

function checkAtt() {
    imgpf = document.querySelectorAll("img.imgpf");

    if (localStorage.getItem("pfp") != null) {
        imgpf.forEach(function (img) {
            img.setAttribute("src", localStorage.getItem("pfp"));
        });
    }
}

function createElems(param, e) {
   
    var post = "<div class='post'>";
    //post += "<img src='images/default.jpg' class='imgpf'>";
    
    post += "<span class='name'>"+name+"</span>";
    
    post += "<div class='menu dropbtn'>";
    post += "<span class='dot dropbtn'></span>";
    post += "<span class='dot dropbtn'></span>";
    post += "<span class='dot dropbtn'></span>";
    post += "<div id='myDropdown' class='dropdown-content'>";
    post += "<span class='remove'>Delete post</span>";
    post += "<br>";
    post += "<span class='edit'>Edit post</span>";
    post += "</div>";
    post += "</div>";
    post += "<div class='tooltip'>";
    post += "<span class='when'></span>";
    post += "<span class='tooltiptext'></span>";
    post += "</div>";
    post += "<div class='pop'>";
    post += "<h4 class='confirm'>Are you sure?</h4>";
    post += "<div class='confirmBtn'>";
    post += "<button id='yes'>Yes</button>";
    post += "<button id='no'>No</button>";
    post += "</div>";
    post += "</div>";
    post += "<hr>";

    if (param == true) {
        post += "<p class='postPr' id='postPr'>" + area.value + "</p>";
    } else if (param == false) {
        post += "<img id='imgpost' src=" + e.target.result + " class='imgpost'>";
    } else {
        post += "<p id='postPr' class='postPr'>" + area.value + "</p>";
        post += "<img id='imgpost' src=" + e.target.result + " class='imgpost'>";
    }
    post += "<hr>";
    var option = "<div class='option'>";
    option += "<button id='like' class='like'>like</button>";
    option += "<button id='commentBtn'>comment</button>";
    post += option;
    post += "</div>";
    var commentBox = "<div class='commentBox'>";
    commentBox += "<textarea id='cmt' class='commentArea' placeholder='write your comment here'></textarea>";
    commentBox += "</div>";
    post += commentBox;
    var comments = "<section class='comments'>";
    post += "</section>";
    post += comments;
    area.value = "";
    posts.innerHTML += post;

    postArr = [];
    for (i = 0; i < posts.childNodes.length; i++) {
        switch (posts.childElementCount) {
            default:
                posts.childNodes[i].classList.add(i + 1);
                postArr.push(posts.childNodes[i]);
                console.log(postArr);
                postObj = {
                    className: posts.childNodes[i].className,
                    post1: (post1.liked = null),
                };
        }
    }
}
