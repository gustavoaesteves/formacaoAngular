import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  // Executa o codigo antes de cada it()
  beforeEach( () => {
    service = new UniqueIdService();
  })

  // Check se o começo do Prefix está correto
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  // Check se não houve repetições
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times`, () => {
    const ids = new Set(); // Não aceita string duplicadas

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }

    expect(ids.size).toBe(50);

  });

  //Check quantidade de Ids gerados
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when Called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);

    // Aceita somente teste de uma variável literal( false ou true)
    //expect(true).toBeTrue();
    // Compara dois objetos, com a mesma referencia
    //expect(true).toBe(true);
    // Testar de uma forma mais generica algum literal ou objeto
    //expect(true).toBeTruthy();

  });

  // Check se está pegando erro quando passa valores não permitidos
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0','1'];

    //Expect dessa forma chama o service como função anonima
    emptyValues.forEach(value =>
      expect(() => service.generateUniqueIdWithPrefix(value))
      .withContext(`Empty value ${value}`).toThrow() )
  });

})
