Array.prototype.reduce = function(call, initialization = this[0]){
    let total = initialization;
    

    for(let i = 0; i < this.length; i += 1){
        initialization = call(initialization, this[i], this);
    }
    return initialization;
}
const arrayOfNames = ['Tanya','Dima', 'Tanya', 'Sahsa', 'Vova','Dima', 'Ira', 'Dima', 'Sahsa'];

const reduceArrayOfNames = arrayOfNames.reduce(function(total, i){
    total[i]? total[i] +=1 : total[i] = 1;
    return total;
  
},{})

console.log(reduceArrayOfNames)