let keylog = JSON.parse(localStorage.getItem("key"));
let count = 0;
if (JSON.parse(localStorage.getItem("key")) !== "") {
  function sta() {
    document.getElementById('loader').style.display='block'
    let userfine1 = 0;
    let userfine2 = 0;
    let userfine3 = 0;
    let userfine4 = 0;
    let userfine5 = 0;
    let userfine6 = 0;
    let userfine7 = 0;
    let userfine8 = 0;

    let duserfine1 = 0;
    let duserfine2 = 0;
    let duserfine3 = 0;
    let duserfine4 = 0;
    let duserfine5 = 0;
    let duserfine6 = 0;
    let duserfine7 = 0;
    let duserfine8 = 0;
    
    let keylog = JSON.parse(localStorage.getItem("key"));
    if (userfine1 === 0) {
      firebase
        .database()
        .ref("Acceptor/A+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
               
                 //if (count === 0) {                   Acceptor_login();                   count++;                 }
               
                document.getElementById("donor").style.display = "inherit";
              } else if (dd[key].user === "Donor") {
                
                  //if (count === 0) {                   Donor_login();                   count++;                 }
               
                document.getElementById("accep").style.display = "inherit";
              }
              // obj.contact=dd[key].contact

              userfine1 = 1;
              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (userfine1 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/A+/")
              .once("value", data1 => {
                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
          <div class="our-team-main">
          
          <div class="team-front">
          <img src="../images\\icon.ico" class="img-fluid img" />
          <h3 class="card_head">Name: ${dd[key].name}</h3>
          <p>Blood Group: ${dd[key].blood}</p>
          
          </div>
          
          <div class="team-back">
          <span class="span_color">
        <strong style="color:red">Age:</strong> ${
          dd[key].age
        }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
        <p></p>        <strong style="color:red">Gender:</strong> ${
          dd[key].gender
        }
        <p></p> <strong style="color:red">Type:</strong> ${
          dd[key].user
        }  <hr class="colorgraph">
           <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
          </span>
          </div>
          
          </div>
          </div>`;

                  //   u

                  //
                }
              });

            firebase
              .database()
              .ref("Donor/A-/")
              .once("value", data1 => {
                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
          <div class="our-team-main">
          
          <div class="team-front">
          <img src="../images\\icon.ico" class="img-fluid img" />
          <h3 class="card_head">Name: ${dd[key].name}</h3>
          <p>Blood Group: ${dd[key].blood}</p>
          
          </div>
          
          <div class="team-back">
          <span class="span_color">
        <strong style="color:red">Age:</strong> ${
          dd[key].age
        }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
        <p></p>        <strong style="color:red">Gender:</strong> ${
          dd[key].gender
        }
        <p></p> <strong style="color:red">Type:</strong> ${
          dd[key].user
        }  <hr class="colorgraph">
           <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
          </span>
          </div>
          
          </div>
          </div>`;

                  //
                }
              });

            firebase
              .database()
              .ref("Donor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
          <div class="our-team-main">
          
          <div class="team-front">
          <img src="../images\\icon.ico" class="img-fluid img" />
          <h3 class="card_head">Name: ${dd[key].name}</h3>
          <p>Blood Group: ${dd[key].blood}</p>
          
          </div>
          
          <div class="team-back">
          <span class="span_color">
        <strong style="color:red">Age:</strong> ${
          dd[key].age
        }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
        <p></p>        <strong style="color:red">Gender:</strong> ${
          dd[key].gender
        }
        <p></p> <strong style="color:red">Type:</strong> ${
          dd[key].user
        }  <hr class="colorgraph">
           <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
          </span>
          </div>
          
          </div>
          </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
          <div class="our-team-main">
          
          <div class="team-front">
          <img src="../images\\icon.ico" class="img-fluid img" />
          <h3 class="card_head">Name: ${dd[key].name}</h3>
          <p>Blood Group: ${dd[key].blood}</p>
          
          </div>
          
          <div class="team-back">
          <span class="span_color">
        <strong style="color:red">Age:</strong> ${
          dd[key].age
        }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
        <p></p>        <strong style="color:red">Gender:</strong> ${
          dd[key].gender
        }
        <p></p> <strong style="color:red">Type:</strong> ${
          dd[key].user
        }  <hr class="colorgraph">
           <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
          </span>
          </div>
          
          </div>
          </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine2 === 0) {
      firebase
        .database()
        .ref("Acceptor/A-/")
        .once("value", data1 => {
          let dd = data1.val();
          document.getElementById('loader').style.display='none'
          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                userfine2 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                userfine2 = 1;
              }

              break;
            }
          }
        })
        .then(() => {
          if (userfine2 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/A-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine3 === 0) {
      firebase
        .database()
        .ref("Acceptor/B+/")
        .once("value", data1 => {
          let dd = data1.val();
          document.getElementById('loader').style.display='none'
          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                userfine3 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                userfine3 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (userfine3 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/B+/")
              .once("value", data1 => {
                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;

                  //
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }

                // let counter = 0;
                //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
                //         open("./acceptor.html","_self")
              });
          }
        });
    } else {
    }

    if (userfine4 === 0) {
      firebase
        .database()
        .ref("Acceptor/B-/")
        .once("value", data1 => {
          let dd = data1.val();
          document.getElementById('loader').style.display='none'
          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                userfine4 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                userfine4 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (userfine4 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine5 === 0) {
      firebase
        .database()
        .ref("Acceptor/O+/")
        .once("value", data1 => {
          let dd = data1.val();
          document.getElementById('loader').style.display='none'
          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                userfine5 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                userfine5 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (userfine5 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();
                document.getElementById('loader').style.display='none'
                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine6 === 0) {
      firebase
        .database()
        .ref("Acceptor/O-/")
        .once("value", data1 => {
          let dd = data1.val();
          document.getElementById('loader').style.display='none';
          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
              }
              userfine6 = 1;
              break;
            }
          }
        })
        .then(() => {
          if (userfine6 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine7 === 0) {
      firebase
        .database()
        .ref("Acceptor/AB+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
              }
              userfine7 = 1;
              break;
            }
          }
        })
        .then(() => {
          if (userfine7 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/A+/")
              .once("value", data1 => {
                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/A-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
            firebase
              .database()
              .ref("Donor/B+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
            firebase
              .database()
              .ref("Donor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (userfine8 === 0) {
      firebase
        .database()
        .ref("Acceptor/AB-/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key === firebase.auth().currentUser.uid) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
              }
              userfine8 = 1;
              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (userfine8 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Donor/A-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });

            firebase
              .database()
              .ref("Donor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
        <div class="our-team-main">
        
        <div class="team-front">
        <img src="../images\\icon.ico" class="img-fluid img" />
        <h3 class="card_head">Name: ${dd[key].name}</h3>
        <p>Blood Group: ${dd[key].blood}</p>
        
        </div>
        
        <div class="team-back">
        <span class="span_color">
      <strong style="color:red">Age:</strong> ${
        dd[key].age
      }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
      <p></p>        <strong style="color:red">Gender:</strong> ${
        dd[key].gender
      }
      <p></p> <strong style="color:red">Type:</strong> ${
        dd[key].user
      }  <hr class="colorgraph">
         <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" Register()"><strong>Request</strong></a>
        </span>
        </div>
        
        </div>
        </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine1 === 0) {
      firebase
        .database()
        .ref("Donor/A+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine1 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";

                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine1 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine1 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/A+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine2 === 0) {
      firebase
        .database()
        .ref("Donor/A-/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine2 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine2 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine2 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/A+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/A-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine3 === 0) {
      firebase
        .database()
        .ref("Donor/B+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine3 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine3 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine3 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/B+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine4 === 0) {
      firebase
        .database()
        .ref("Donor/B-/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine4 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine4 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine4 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/B+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine5 === 0) {
      firebase
        .database()
        .ref("Donor/O+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine5 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine5 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine5 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/A+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/B+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine6 === 0) {
      firebase
        .database()
        .ref("Donor/AB+/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine6 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine6 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine6 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine7 === 0) {
      firebase
        .database()
        .ref("Donor/AB-/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine7 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine7 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine7 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }

    if (duserfine8 === 0) {
      firebase
        .database()
        .ref("Donor/O-/")
        .once("value", data1 => {
          let dd = data1.val();           document.getElementById('loader').style.display='none';

          for (let key in dd) {
            if (key == keylog) {
              if (dd[key].user === "Acceptor") {
                document.getElementById("donor").style.display = "inherit";
               //if (count === 0) {                   Acceptor_login();                   count++;                 }
                duserfine8 = 1;
              } else if (dd[key].user === "Donor") {
                document.getElementById("accep").style.display = "inherit";
                //if (count === 0) {                   Donor_login();                   count++;                 }
                duserfine8 = 1;
              }

              break;
            }
          }

          // let counter = 0;
          //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n")
        })
        .then(() => {
          if (duserfine8 === 1) {
            while (document.getElementById("div1").hasChildNodes()) {
              document
                .getElementById("div1")
                .removeChild(document.getElementById("div1").lastChild);
            }

            let ul = document.getElementById("div1");
            ul.innerHTML = "";

            let arrname = [];
            let arrage = [];
            let arraddress = [];
            let arrcontact = [];
            let arrgender = [];
            let arrut = [];
            let arrbt = [];

            firebase
              .database()
              .ref("Acceptor/A+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/A-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/AB+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/B+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/B-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });

            firebase
              .database()
              .ref("Acceptor/AB-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/O+/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
            firebase
              .database()
              .ref("Acceptor/O-/")
              .once("value", data1 => {
                arrname = [];
                arrage = [];
                arraddress = [];
                arrcontact = [];
                arrgender = [];
                arrut = [];
                arrbt = [];

                let dd = data1.val();           document.getElementById('loader').style.display='none';

                for (let key in dd) {
                  ul.innerHTML += `<div class="col-lg-4 " style="overflow: auto;">
      <div class="our-team-main">
      
      <div class="team-front">
      <img src="../images\\icon.ico" class="img-fluid img" />
      <h3 class="card_head">Name: ${dd[key].name}</h3>
      <p>Blood Group: ${dd[key].blood}</p>
      
      </div>
      
      <div class="team-back">
      <span class="span_color">
    <strong style="color:red">Age:</strong> ${
      dd[key].age
    }<p></p><strong style="color:red">Contact: </strong>${
                    dd[key].contact
                  } <p></p><strong style="color:red">Address: </strong>${
                    dd[key].Address
                  }
    <p></p>        <strong style="color:red">Gender:</strong> ${dd[key].gender}
    <p></p> <strong style="color:red">Type:</strong> ${
      dd[key].user
    }  <hr class="colorgraph">
       <a class="btn btn-primary my-3 btn-block" style="color:white" onClick=" donate()"><strong>Donate</strong></a>
      </span>
      </div>
      
      </div>
      </div>`;
                }
              });
          }
        });
    } else {
    }
  }

  sta();

  function donate() {
    swal({
      title: "SUCCESS!",
      text: "Blood Donated Successfully!!! ",
      icon: "success",
      button: "OK!",
      closeOnClickOutside: "not",
      closeOnEsc: "not"
    });
  }

  function Register() {
    swal({
      title: "SUCCESS!",
      text: "Blood Request Sent Successfully!!! ",
      icon: "success",
      button: "OK!",
      closeOnClickOutside: "not",
      closeOnEsc: "not"
    });
  }
  function Donor_login() {
    swal({
      title: "SUCCESS!",
      text: "Donor Login!!! ",
      icon: "success",
      button: "OK!",
      closeOnClickOutside: "not",
      closeOnEsc: "not"
    });
  }
  function Acceptor_login() {
    swal({
      title: "SUCCESS!",
      text: "Acceptor Login!!! ",
      icon: "success",
      button: "OK!",
      closeOnClickOutside: "not",
      closeOnEsc: "not"
    });
  }

  function out() {
    swal({
      title: "Warning?",
      text: "Are you want to logout now ???",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Successfully logout!!", {
          icon: "success"
        }).then(() => {
          firebase
            .auth()
            .signOut()
            .then(function() {
              localStorage.setItem("key", JSON.stringify(""));
              open("./home.html", "_self");
            });
        });
      }
    });
  }
} else {
  open("./home.html", "_self");
}

//images
