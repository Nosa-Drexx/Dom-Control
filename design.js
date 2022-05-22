const backArrow = document.querySelector('.back-arrow');
const sideBar = document.querySelector('.side-bar');
const menu = document.querySelector('.menu');
const addMore = document.querySelector('.submit');
//const add = document.querySelectorAll('.add');
const check = document.querySelector('input[name=checkbox');
const item = document.querySelector('.Items');
const remove = document.querySelector('.remove');
var arr = [];


menu.addEventListener('click',()=>{
    sideBar.style.transform = "translateX(0)";
    document.querySelector('.modal').style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";
});
backArrow.addEventListener('click',()=>{
    sideBar.style.transform = "translateX(-100%)";
    document.getElementById("body").style.overflow = "auto"; 
    document.querySelector('.modal').style.display = "none";
});

addMore.addEventListener('click',()=>{ // adds more boxes to the Dom.
    const node = document.createElement('div');
    node.setAttribute('class','add');

    const nameOfNode = document.createElement('h2');
    var name = document.querySelector('#value').value;
    nameOfNode.innerText = name;

    const button = document.createElement('button');
    button.setAttribute('class','remove');
    button.innerText="X";

    button.addEventListener('click',()=>{ // giving user create element(box) an event listener
        button.parentElement.remove();
});

    node.appendChild(nameOfNode);
    node.appendChild(button);

    item.appendChild(node);  
    arr.push(node); // adds addition element to the new array;
    document.querySelector('#value').value = '';

});

check.addEventListener('change', function(){
    if(this.checked) {
         item.querySelectorAll('.add').forEach( (node)=>{
            node.style.display = 'none';
         });
         document.getElementById('text').innerText = "All Boxes are hidden, Uncheck to view";
    }
    else{

        item.querySelectorAll('.add').forEach( (node)=>{
            node.style.display = 'flex';
         });
        document.getElementById('text').innerText = "Check Box To Hide All Items, And Uncheck To View Them.";
    }
});

const hold = item.querySelectorAll('.remove');
hold.forEach((Default)=>{  /// giving the default element, (developer box) an event listener.
            Default.addEventListener('click',()=>{
            Default.parentElement.remove();
    });
})

const searchbutton = document.querySelector('.firstsearch');
const searchbox = document.getElementById('search1');

searchbutton.addEventListener('mouseover', ()=>{
    searchbox.style.opacity = "1";
    searchbox.style.width = "70%";
    searchbutton.style.opacity = "0";
});
document.getElementById("form").addEventListener('mouseleave',()=> {
    searchbox.style.opacity = "0";
    searchbox.style.width = "0%";
    searchbutton.style.opacity = "1";
});

item.querySelectorAll('.add').forEach((node)=>{
    arr.push(node); // pushes every element to the new array
})

searchbox.addEventListener('keypress',(event)=>{
    if(event.keyCode === 13) {
        var compare = searchbox.value;

        item.querySelectorAll('.add').forEach((node)=>{
            node.style.display = 'none';
        });

        arr.forEach((elem)=>{
        var holder = elem.querySelector('h2').innerHTML;

        if(compare === holder) {
            elem.style.display = 'flex';
        }
        })
        searchbox.value = ''
    }
});
 