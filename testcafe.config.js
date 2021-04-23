const createTestCafe = require('testcafe');
async function setupTestCafe(){
       
    try {
        const testcafe = await createTestCafe('localhost');
        const runner = testcafe.createRunner();
        const failedCount = await runner
            .src('*.spec.ts')
            .browsers(['chrome'])
            .run();
            console.log('failed test: $(failedCount)');
            testcafe.close();
        }catch(error){
            console.error(error);
            testcafe.close();
        }        
}

setupTestCafe();