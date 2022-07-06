const createTestCafe = require('testcafe');
async function setupTestCafe(){
       
    try {
        const testcafe = await createTestCafe('localhost');
        const runner = testcafe.createRunner();
        const failedCount = await runner
            .src('*.spec.ts')
            .browsers(['chrome'])
            .reporter("html", "test_folder/file.html")
            .run();
            testcafe.close();
        }catch(error){
            console.error(error);
            testcafe.close();
        }        
}

setupTestCafe();