// first question palidrome [1]

function checkPalindrome(str){ 
    
     const all = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/,"")
    const finalstring = all;

    const len = finalstring.length;
 
    for (let i = 0; i < len ; i++) {
       
        if (str[i] != str[len - i - 1])
            return false;        
    } 
    return true;
}
 let st = "dad";

if (checkPalindrome(st) == true)
    console.log("Yes");
else
    console.log("No");




//  second uniquealue Array [2]
const a = ['a', 1, 'a', 2, '1'];

function uniqueOne(value, index, array) {
  return array.indexOf(value) === index;
}

const unique = a.filter(uniqueOne);

console.log("2nd",unique); 





// Third fetchData [ console 3rd]
let array = []
function fetchData(){

    fetch('https://randomuser.me/api/0.8/?results=10')
    .then(res=>res.json())
    .then(data=>{
array = data.results
console.log("3rd",data)

    })

    async function f1() {
      const x = await new Date;
      console.log('3rd',x); 
    }
    f1()
}
fetchData()
// f1()



// 6th question safeparse()  [console 4th]

let str = '{ where": "are", "you": "0" }';

function testSting(text) {
   
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }

   
}

function run() {
    console.log("4th",testSting(str));
}

run()

// 4th question deepClone() [console 5th]

function deepCopy(){

    let person1 = {
        name: "Dawood",
        company: "nano"
    }
    
    let person2 = {...person1 };
    
    person1.name = "appu"
    
    console.log("5th","i'am ", person1.name)
    console.log("5th","he is ", person2.name); 
}

deepCopy()


// last question findTwoSum()

const Sum = function(nums, target) {
    for(let a = 0; a < nums.length; a++){
        for(let b = a+1; b < nums.length; b++){
            if(nums[a] + nums[b] == target){
                return [a, b]
            }
        }
    }
};

console.log("6th",Sum([5, 7, 11, 2],9))
console.log("6th",Sum([3, 2, 4],6))