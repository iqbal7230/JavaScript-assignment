// Create a function which returns number of invocations and number of instances of a function. 

function countInvocations() {
    let invocationCount = 0;
    let instanceCount = 0;

    function innerFunction() {
        invocationCount++;
        console.log("Invocation count:", invocationCount);
    }

    function createInstance() {
        instanceCount++;
        console.log("Instance count:", instanceCount);
        return innerFunction;
    }

    return createInstance;
}

const createInnerFunction = countInvocations();

const instance1 = createInnerFunction(); 
instance1(); 
instance1(); 

const instance2 = createInnerFunction(); 
instance2(); 
instance2(); 

/* 
Output:
Instance count: 1
Invocation count: 1
Invocation count: 2
Instance count: 2
Invocation count: 3
Invocation count: 4
*/