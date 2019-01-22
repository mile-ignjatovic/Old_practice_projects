var budgetController = (function() {

    var Expense = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calculatePercentage = function(totalInc) {
        if (totalInc > 0) {
            this.percentage = Math.round((this.value / totalInc) * 100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var Income = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    var calcTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(curr) {
            sum += curr.value;
        });
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, des, val) {
            var newItem;
            // create a new id
            if (data.allItems[type].length > 0) {
                var ID = data.allItems[type][data.allItems[type].length-1].id + 1;
            } else {
                ID = 0;
            }

            // create a new object of passed type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into an arr and return it
            data.allItems[type].push(newItem);
            return newItem;
        }, 

        deleteItem: function(type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(curr, currIndex, arr) {
                return curr.id;
            })
            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calcBudget: function() {
            calcTotal('exp');
            calcTotal('inc');
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1; 
            }
        },

        calcPercentage: function() {
            data.allItems.exp.forEach(function(curr) {
                curr.calculatePercentage(data.totals.inc);
            })
        },

        getPercentage: function() {
            var allPercentage = data.allItems.exp.map((function(curr) {
                return curr.getPercentage();
            }));
            return allPercentage;
        },

        getBudget: function() {
            return { budget: data.budget, totalInc: data.totals.inc, totalExp: data.totals.exp, percentage: data.percentage};
        },

        testing: function() {
            console.log(data);
        }
    }

})();



var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
        incomeContainer: '.income__list',
        expansesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expansesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            // create html string with placeholder text
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = `<div class="item clearfix" id="inc-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div></div></div>`;
            } else if (type === 'exp') {
                element = DOMstrings.expansesContainer;
                html = `<div class="item clearfix" id="exp-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__percentage">%precentage%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div></div></div>`;
            }
            // replace placeholder text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.desc);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorId) {
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el); 
        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expansesLabel).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },

        displayProcentages: function(percentages) {

            // ovo je node list
            var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);
            
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function(current, index) {
                // do some stuff
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            })


        },

        getDOMStrings: function() {
            return DOMstrings;
        }
    }

})()



var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {   
            // test for enter
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    };

    var updateBudget = function() {
        // 4. calculate budget
        budgetCtrl.calcBudget();
        // return budget
        var budget = budgetCtrl.getBudget();
        // 5.display budget
        UICtrl.displayBudget(budget)
    }

    var updatePercentage = function() {
        // calculate percentage
        budgetCtrl.calcPercentage();
        // read percentages from the budget controler
        var percentages = budgetCtrl.getPercentage()
        // display percentage
        UICtrl.displayProcentages(percentages);
    }

    var ctrlDeleteItem = function(event) {
        var itemId, splitId, type, id;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemId) {

            splitId = itemId.split('-');
            type = splitId[0];
            id = parseInt(splitId[1]);

            // delete the item from the data structure
            budgetCtrl.deleteItem(type, id);
            // delete the item from the ui
            UICtrl.deleteListItem(itemId);
            // update and show the new budget
            updateBudget();
            // update percentage
            updatePercentage();
        }
    }

    var ctrlAddItem = function(){
        var input, newItem;

        // 1. get field input data
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to budget controler
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. add the item to the ui
            UICtrl.addListItem(newItem, input.type)
            UICtrl.clearFields();

            // calc and update budget 
            updateBudget();

            // update percentage
            updatePercentage();
            // 
        }
    }
    
    return {
        init: function() {
            console.log('App started...')
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0, totalInc: 0, totalExp: 0, percentage: -1
            })
        }
    }

})(budgetController, UIController)

controller.init();