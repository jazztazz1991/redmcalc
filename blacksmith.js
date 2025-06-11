const ironBars = 2000;
const transferBoxes = 2000;

const recipes = {
    ironBar: {
        ironOre: 25,
        coal: 25,
        output: 6
    },
    nails: {
        ironBar: 1,
        coal: 1,
        output: 6
    },
    copperBar: {
        copperOre: 5,
        coal: 2,
        output: 2
    },
    transferBoxes: {
        copperBar: 1,
        nails: 5,
        softwood: 2,
        output: 1
    }
}
craft();
function craft(){
    let item = "ironBar";
    let count = ironBars;
    let recipe = recipes[item];
    console.log(recipe);
    let output = recipe.output;
    let requiredMaterials = [];

    // Check count does not equal 0
    if (count === 0) {
        console.log("No items to craft.");
        return;
    }
    // Check if recipe exists
    if (!recipe) {
        console.log("Recipe does not exist.");
        return;
    }
    // get the required materials
    for (let material in recipe) {
        if (material !== 'output') {
            // add each material to the requiredMaterials array with the amount needed using forumla: count * recipe[material] / output
            requiredMaterials.push({
                material: material,
                amount: Math.ceil(count * (recipe[material] / output))
            });
        }
    }
    

    // divide count by the output to get the total number of times we need to craft
    let totalCrafts = Math.ceil(count / output);
    if (totalCrafts <= 0) {
        console.log("Not enough items to craft.");
        return;
    }
    console.log(`Crafting ${totalCrafts} times for ${item}.`);
    // Log the required materials
    console.log("Required materials:");
    requiredMaterials.forEach(material => {
        console.log(`${material.amount} ${material.material}`);
    });
    // Log the output
    console.log(`Output: ${output * totalCrafts} ${item}`);
    
}