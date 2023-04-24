const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btnUpdate = document.getElementById("choose-avatar-button");
const btnsub = document.querySelector("#btnupdate");
const btncheck = document.querySelector("#my-form button[type='submit']");
const btnup = document.querySelector("#btnup");
const btnhref = document.querySelector("#btnhref");
const myForm = document.querySelector(".myForm");
const myInfor = document.querySelector(".myInfor");
const myInputSelect = myForm.querySelectorAll("input, select");
const myInput = myForm.querySelectorAll("input");
const mySelect = myForm.querySelectorAll("select");
const btnForm= document.querySelector("#showForm");
const btnOK = document.querySelector("#btnOK");
const btnEditForm = document.querySelector("#checkbox");
const btnClick = document.querySelector(".btn-form");
const inputfile = document.querySelector("#inputfile");
const myAvatar = document.querySelector("#myAvatar");
var img = "\\icon\\avata.png";
var oldAvatar = "\\icon\\avata.png";
var newAvatar = "";
//Me
var me ={
    name: "Ong Thế Tùng",
    yearschool: "2020",
    edulv : "Đại học đại trà",
    edupro : "Khoa học máy tính 2020",
    fac : "Trường công nghệ thông tin và truyền thông",
    staschool : "Học",
    sex : "Nam",
    class: "Khoa học máy tính 06-k65",
    course: "65",
    email: "tung.ot204619@sis.hust.edu.vn",
    datecpa: "20212",
    cpa : "0.00",
    acc : 64,
    dept : 0,
    stulv : 3,
    warnlv : "M0",
    nation : "KINH",
    grad3 : 2020,
    addr : "CẢNH THỤY, HUYỆN YÊN DŨNG, TỈNH BẮC GIANG",
    cmt : "122450533",
    addcmt : "BẮC GIANG",
    farther : "***",
    birthfa : "***",
    jobja : "***",
    phonefa :"KHÔ***CÓ" ,
    emailfa : "KHÔNG CÓ",
    reli : "KHÔNG",
    graschool : "THPT YÊN DŨNG SỐ 1",
    hh : "XÃ CẢNH THỤY, HUYỆN YÊN DŨNG, TỈNH BẮC GIANG",
    phone : "KHÔ***CÓ",
    mother : "***",
    birmo : "***",
    jobmo : "***",
    phonemo :"KHÔ***CÓ" ,
    emailmo : "KHÔNG CÓ" ,
    mssv: 20204619
};

var ttsv= Object.assign({}, me);

if(btn1){
    btn1.addEventListener('click', function(){
        var content = document.getElementById("left-content");
        if(content.classList.contains("open")){
            content.classList.remove("open")
        }else{
            content.classList.add("open")
        }
    })
}

if(btn2){
    btn2.addEventListener('click', function(){
        var nav = document.getElementById("nav");
        if(nav.classList.contains("open")){
            nav.classList.remove("open")
        }else{
            nav.classList.add("open")
        }
    })
}


if(btnForm){
    btnForm.addEventListener('click', function(event){
        event.preventDefault();
        myForm.style.setProperty("display", "block", "important");
        myInfor.style.setProperty("display", "none", "important");

    })
}

// button Cancel
if(btnhref){
    btnhref.addEventListener('click', function(event){
        app.start();
        myAvatar.src = oldAvatar;
        console.log(ttsv);
    });
};

// button OK
if(btnOK){
    btnOK.addEventListener('click', function(event){
        app.getTTSV();
        app.start();
        if(newAvatar !== ""){
            oldAvatar = newAvatar;
        }
        btnClick.style.setProperty("display", "none", "important");
        console.log(ttsv);
    })
};

// button Reset
if(btnup){
    btnup.addEventListener('click', function(){
        ttsv= Object.assign({}, me);
        app.upTTSV();
        myAvatar.src = img;
        oldAvatar = img;
        console.log(ttsv);

    });
}

// button Update Image
if(btnUpdate){
    btnUpdate.addEventListener('click', function(){
        const srcAvatar = myAvatar.src;
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', function(){
            if(this.files && this.files[0]){
                var file = this.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    myAvatar.src = e.target.result;
                    newAvatar = e.target.result;
                }
            }
        });
        fileInput.click();
    });

};


if(btnEditForm){
    btnEditForm.addEventListener('click', function(){
        myInputSelect.forEach(function(input){
            if(input.disabled === false){
                input.disabled = true;
                btnUpdate.disabled = true;
                btnClick.style.setProperty("display", "none", "important");
                btnUpdate.style.setProperty("display", "none", "important");
            }
            else{
                input.disabled = false;
                btnUpdate.disabled = false;
                btnClick.style.setProperty("display", "inline-block", "important");
                btnUpdate.style.setProperty("display", "inline-block", "important");

            }
        });
    });
};


var app={
    upTTSV : function(){
        myInput.forEach(function(input){
            input.value = ttsv[input.name];
            input.classList.add('isrequired');
        });

        mySelect.forEach(function(select){
            var option = select.options[select.selectedIndex];
            option.value = ttsv[select.name];
            option.text = ttsv[select.name];
        });
    },
    
    hiddenInput : function(){
        myInput.forEach(function(input){
            input.disabled = true;
        });
        mySelect.forEach(function(select){
            select.disabled = true;
        });
        btnClick.style.setProperty("display", "none", "important");
        btnUpdate.style.setProperty("display", "none", "important");
    },

    getTTSV : function(){
        myInput.forEach(function(input){
            ttsv[input.name] = input.value;
        });
        mySelect.forEach(function(select){
            var option = select.options[select.selectedIndex];
            ttsv[select.name] = option.text;
        });
    },
    
    start: function(){
        this.upTTSV();
        this.hiddenInput();
    }
}

app.start();


function validator(formElement ,inputElements, rule){
    inputElements.forEach(function(inputElement){
        // on blur
        inputElement.onblur = function(){
            var errorMessage = rule.test(inputElement.value);
            var smallElement = formElement.querySelector(`small[for="${inputElement.name}"]`);

            if(rule.selector===".isrequired"){
                if(errorMessage){
                    var inputName = formElement.querySelector(`label[for="${inputElement.name}"]`);
                    inputName.style.color = 'red';
                    inputElement.style.setProperty("border", "1px solid red");
                }else{
                    var inputName = formElement.querySelector(`label[for="${inputElement.name}"]`);
                    inputName.style.color = 'black';
                    inputElement.style.setProperty("border", "1px solid none");
                };
            };
            if(rule.selector==="#email"){
                if(errorMessage){
                    var inputName = formElement.querySelector(`label[for="${inputElement.name}"]`);
                    inputName.style.color = 'red';
                    inputElement.style.setProperty("border", "1px solid red");
                    smallElement.innerHTML = errorMessage;
                }
                else{
                    smallElement.innerHTML = "";
                }
            }
        }

        // on input
        inputElement.oninput = function(){
            var inputName = formElement.querySelector(`label[for="${inputElement.name}"]`);
            inputName.style.color = 'black';
            inputElement.style.setProperty("border", "1px solid #ccc");
        };

        
    })
}

function Validator(options){
    var formElement = document.querySelector(options.form);
    if(formElement){
        // submit form
        // formElement.onsubmit = function(e){
        //     e.preventDefault();
        //     options.rules.forEach(function(rule){
        //         var inputElements = formElement.querySelectorAll(rule.selector);
        //         validator(formElement, inputElements, rule);
        //     });
        // };
        options.rules.forEach(function(rule){
            var inputElements = formElement.querySelectorAll(rule.selector);
            validator(formElement, inputElements, rule)
        })
    }
};

Validator.isRequired = function(selector){
    return {
        selector : selector,
        test : function(value){
            return value.trim() ? undefined : true;
        }
    };
};


Validator.isEmail = function(selector){
    return {
        selector : selector,
        test : function(value){
            var regix= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            return regix.test(value) ? undefined : "Vui lòng nhập đúng định dạng email";
        }
    };
};



Validator({
    form: '#my-form',
    rules: [
        Validator.isRequired(".isrequired"),
        Validator.isEmail("#email"),
    ]
});




