import { Selector } from 'testcafe'; // first import testcafe selectors

//A fixture is a group of tests with the same starting URL. Every test belongs to a fixture.
fixture `buy pants item on mlb and log the order id`// declare the fixture
    .page `https://www.mercadolivre.com.br/`;  // specify the start page


//This test will buy the last iteam on my purchases with the last direction setted

test('buy the last item on my purchases with the last direction setted', async t => {

    await t
        .click('#nav-header-menu > a:nth-child(3)')

    await t
        .typeText('#user_id', 'TETE5225125')

    await t
        .click('#login_user_form > div.login-form__actions > button > span')

    await t
        .typeText('#password', 'Meli$2022')

    await t
    .click('#login_user_form > div.login-form__actions > button > span')

    await t
        .navigateTo('https://produto.mercadolivre.com.br/MLB-2625115872-test-calza-para-mujer-deporte-indumentaria-_JM?attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D%2CSIZE%3AUw%3D%3D&quantity=1');

    await t
        .click('#root-app > div > div.ui-pdp-container.ui-pdp-container--pdp > div > div.ui-pdp-container__col.col-1.ui-pdp-container--column-right.mt-16.pr-16.ui-pdp--relative > div > div.ui-pdp-container__row.ui-pdp-component-list.pr-16.pl-16 > div > div.ui-pdp-container__row.ui-pdp-container__row--main-actions > form > div > button.andes-button.andes-button--loud')

    await t
        .click('#app-container > div > div > div > div.ui-list-footer > div.list-submit-button > button')



    await t.pressKey('tab')
    await t.pressKey('tab')
    await t.pressKey('tab')
    await t.pressKey('tab')
    await t.pressKey('tab')
    await t.pressKey('enter')

    //confirma la compra 
    await t
        .click('#aside-container > div > div > aside > section > form > button > span.aside-button__text')

    await t
        .click('#aside-container > div > div > aside > section > form')

    //ver en mis compras

    await t
    .click('#root-app > div > div.main-container > div.container > div.bf-ui-card.bf-ui-card--flat > div.bf-ui-button-container.bf-ui-button-container--vertical.bf-ui-button-container--transparent > a > span > span')


const headerText = await Selector('#app-root-wrapper > div > div > div.detail-container > div.bf-ui-ticket > h4').textContent;
console.log("- Mercado Libre Brasil - `https://www.mercadolivre.com.br/`");
console.log("MLB - NRO DE ORDEN:");
console.log(headerText);


});
