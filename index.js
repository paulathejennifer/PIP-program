function modifyScores(students){
    const goodScore =[students.sort((a,b)=> b.performance - a.performance)]
    return goodScore
}
const trueMark=[{name:"Anna", performance:100},{name:"Peter Njoro", performance:12}, {name:"Sheilda",performance:64}]
console.log(modifyScores(trueMark));

function matchingPassword(input, text){
    const cleanInput = input.trimStart().toLowerCase();
    const cleanText = text.trimStart().toLowerCase();

    return cleanInput===cleanText
}
const password1 = " Pjen123"
const password2 = "pJen123"

console.log(matchingPassword(password1,password2));





function checkMultiples(amount, day){
       if (amount % 5 === 0){
            return day 
        }else{
            return "not needed !"
        }
         }     console.log(checkMultiples(40,"Saturday"));
 

         const userProfile = {
            "firstName": "Jennnifer",
            "lastName": "Chinyere",
            "age": 19,
            "email": "kenya@gmail.com",
            "friends": ["Ann", "Lynn"]

         }
         console.log(userProfile);


         const  jenniferLopez={
            "Jennifer": "firstName","Chinyere":"lastName","age": 72,"residence":"Dandora","besties":["Joy","Vicky"]

         }
         console.log(jenniferLopez);
         



         const myBook = {
            "Title":"The River Cries",
            "Author": "Paulo Coelho",
            "ISBN": "4562-67282-37282",
            "Publication year": 2011,
            "No.of copies sold out": 25000
         }
         console.log(myBook);
         console.log(myBook.Author);


         const toDoList= {
         "number":"Task1",
         "description": "Pick up kids from school",
         "dueDate": ("2025-04-12T16:00:00Z"),
         "status":"pending"

         
         }
         console.log({toDoList});
         console.log(toDoList.status);
         console.log(toDoList.description);

         function sumNumbers(a, b){
            return a +b
         }

        
         console.log(sumNumbers(3,5));

function findMax(arr){
    return Math.max(...arr)
}

const numb= [1,243,5,2,77]
console.log(findMax(numb));


function findMin(array){
    return Math.min(...array)
}
const dig = [1,2,3,421716,4443,0,-48]
console.log(findMin(dig));


    //      function isPalindrome(str){


    //         return str.toLowerCase()===str.toLowerCase().split("").reverse().join("")
            
    //      }

    //      const str = "Hello"
    //      console.log(isPalindrome(str));

    //      const str2 = "Hannah"
    //      console.log(isPalindrome(str2));

    //    const reversal = (stri)=> stri.split("").reverse().join("")
    //    console.log(reversal);

    function isPalindrome(str){
        return str.toLowerCase() === str.replaceAll(" ","").toLowerCase().split("").reverse().join("")
    }

    const name = "Hannah"
    console.log(isPalindrome(name));


    function isEven(numerics){
        return numerics.filter(num => num% 2==0)
    }
    const numerics = [120,12,122,123,124]
    console.log(isEven(numerics));

    function isOdd(numeric){
        return numeric.filter(num => num % 2!==0)
    }
    const numeric = [232,234,235,237,259]
    console.log(isOdd(numeric));
    
    
    


       //even
       function filterEvenNumbers(digits){
        return digits.filter(num => num % 2 ==0)
       }
       const digits = [1,2,3,4,5]
       console.log(filterEvenNumbers(digits));

       //odd
       function filterOddNumbers(numbers){
        return numbers.filter(num => num % 2 !== 0)
       }
       const numbers = [1,2,3,4,5,6,7]
       console.log(filterOddNumbers(numbers));



       //factorial 2 
       function whatIsMyFactorial(num){
        if(num === 0|| num ===1){
            return 1;
        }else{
            return num * factorial(num -1)
        }
       }

       const num = 60
       console.log(whatIsMyFactorial(num));
       
       //factorial
       function factorial(number){
        if (number === 0 || number === 1) { 

            return 1; 
        }
        else {
            return number * factorial(number -1)
        }
       }
       const number = 3
       console.log(factorial(number));


       //prime 2
       function isItPrime(constants){
        if (constants <=1)return false
        for (let x = 2; x <= Math.sqrt(constants); x++) {
            if(constants % x=== 0){return false}
        }
        return true
       }
       const constants = [18]
       console.log(isItPrime(constants))


       function isPrime(num){
        if (num<= 1)return false
        
        for(let i= 2; i <=Math.sqrt(num) ; i++){
        if(num % i === 0) return false

       }
       return true
    }

       const nums = [17]
       console.log(isPrime(nums));


       function amILargest(nestedArr) {
        let large = nestedArr[0][0];
        for(let arr of nestedArr){
            for(let y of arr){
                if(y > large){
                    large = y;
                }
            }
        }
        return large
       }
       const scores = [[1,2],[3,44,775],[12934,3,-9]]
       console.log(amILargest(scores));
       
    //
       function isLargestInArray(nestedArray) {

        let largest = nestedArray[0][0];

        for (let arr of nestedArray){

            for (let num of arr){

                if (num > largest) {
                    largest = num;
                
            }
        }
        }

        return largest;

       }
       const nested = [[90,2,3] ,[4,500,6], [7,8,9]];
       console.log(isLargestInArray(nested));


       //

       function fibonacciSequence(numbers){
        if(numbers <=0) return []
        else if(numbers== 1) return [0]

        let sequence= [0,1]
        while(numbers > sequence.length){
            const nextNumber = sequence[sequence.length -1] + sequence[sequence.length -2];
            sequence.push(nextNumber)

        }
        return sequence
       }
       let inputNo = 5
       console.log(fibonacciSequence(inputNo));
       

//        function fibonacciSequence(numbers){
//         if (numbers <= 0) return []
//         if (numbers ==1 ) return [0]
       

//       let sequence = [0,1];
//       while(sequence.length < numbers){
//         const nextNumber = sequence[sequence.length -1] + sequence[sequence.length -2]
//         sequence.push(nextNumber)
//       }
//    return sequence
//        }
//        let input = [20];
//        console.log(fibonacciSequence(input));

//    function toTitleCase(str){
//     return str.replace(/\b\w/g, l=>l.toUpperCase())
//    }

//    const string = "Hello world my name is jennifer chinyere"
//    console.log(toTitleCase(string));
   

  function toTitleCase(stringInput){
          return stringInput.replace(/\b\w/g, l => l.toUpperCase())      
  }

  const myPlan = "Do PIP assessment tomorrow which i believe will be a success because Jesus Lives"
  console.log(toTitleCase(myPlan));
  
   //FILTER ODD 
   function filterOdd(digits){
    return digits.filter(num=>num%2 !== 0)
   }
   const myDigs = [1,2,3,4,5]
   console.log(filterOdd(myDigs));
   
//////
   function debounce(func, delay){
    let timer;

    return function() {
        clearTimeout(timer)
        timer = setTimeout(func, delay);
    };
   }
   function myFunc(){
    console.log("Execution");
    
   }


   const debouncedFunc = debounce(myFunc, 1000);
  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  setTimeout(debouncedFunc, 1500)

   



       
