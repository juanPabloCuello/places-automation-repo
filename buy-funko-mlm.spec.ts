import { Selector } from 'testcafe'; // first import testcafe selectors

//A fixture is a group of tests with the same starting URL. Every test belongs to a fixture.
fixture `buy funko item on mlm and log the order id`// declare the fixture
    .page `https://www.mercadolibre.com.mx/`;  // specify the start page


//This test will buy the last iteam on my purchases with the last direction setted

test('buy the last iteam on my purchases with the last direction setted', async t => {

    await t
        .click('#nav-header-menu > a:nth-child(3)')

    await t
        .typeText('#user_id', 'TT375996-LOW')

    await t
        .click('#login_user_form > div.login-form__actions > button > span')

    await t
        .typeText('#password', '87dx<h|xlfen3csj')

    await t
    .click('#login_user_form > div.login-form__actions > button > span')

    await t
        .navigateTo('https://articulo.mercadolibre.com.mx/MLM-1409603314-funko-pop-elsa-item-de-test-no-ofertar-_JM?quantity=1');

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
        .click('#aside-container > div > div > aside > section > form')

    //ver en mis compras

await t
    .click('#root-app > div > div.main-container > div.container > div.bf-ui-card.bf-ui-card--flat > div.bf-ui-button-container.bf-ui-button-container--vertical.bf-ui-button-container--transparent > a > span > span')

const headerText = await Selector('#app-root-wrapper > div > div > div.detail-container > div.bf-ui-ticket > h4').textContent;
console.log("NRO DE ORDEN:");
console.log(headerText);


});
