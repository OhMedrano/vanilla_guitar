import MakeElement from '../Tools/MakeElement.js';
var _this = this;
function NavMenu() {
  let newElement = new MakeElement;
  let nav = newElement.createEle('div','navMenu',[12,12,12,12],['naved']);
  let navCount = 0;
  let navBanner = newElement.createEle('div','navBanner',[12,12,6,6],['navStuff']);
  let navLinked = newElement.createEle('div','navLinksContainer',[12,12,6,6],['navStuff']);
  let navLinkedLinks = [
                        {'name':'Home',
                         'webLink':'#home',
                         'html':'home' },
                         {'name':'Visual Scales',
                         'webLink':'#visScale',
                          'html':'visscale' },
                         {'name':'Visual Harmonics',
                         'webLink':'#visHarm',
                          'html':'visharm' }
                        ];

      navBanner.innerText = `Guitar Tools`;
  
      navLinkedLinks.forEach(function(navLink,index){
        let navLi = newElement.createEle('div',navLink.html+"Link",[12,12,3,3],['navLinks',navLink.html]);
            navLi.innerText = navLink.name;
        let navcollect = document.getElementsByClassName('guitarBodies');
            console.log(navcollect);
            for(var p=0;p < navcollect.length;p++){
              if(navcollect[p].id == 'home') {
                navcollect[p].style.display = 'flex';
              } else {
                navcollect[p].style.display = 'none';
              }
            }
         
            navLinked.append(navLi); 
            navLi.addEventListener('click',function(event){
              event.preventDefault();
              let navdirect = document.querySelector('#'+navLink.html);                
                  for(var x=0; x < navcollect.length; x++){
                    navcollect[x].style.display = 'none';;
                  }

              if(event.target.classList[5] == navLink.html){
                navdirect.style.display = 'flex';
              } 
            });
      });

  nav.append(navBanner,navLinked);

  return (nav)
}

NavMenu.prototype = {
  switchNav : function(pageNum){
    this.navNum = pageNum;


    return this.navNum;
  }
}


export default NavMenu;