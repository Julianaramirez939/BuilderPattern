// 1. Interfaces de Chair y Sofa
interface Chair {
  assemble(): void;
}

interface Sofa {
  recline(): void;
}

interface Mesa {
    ensamble(): void;
}

// 2. Clases Concretas de muebles

class ModernChair implements Chair {
  assemble(): void {
    console.log('Assembling modern chair');
  }
}

class VictorianChair implements Chair {
  assemble(): void {
    console.log('Assembling victorian chair');
  }
}

class ModernSofa implements Sofa {
  recline(): void {
    console.log('Reclining modern sofa');
  }
}

class VictorianSofa implements Sofa {
  recline(): void {
    console.log('Reclining victorian sofa');
  }
}

class MesaRustica implements Mesa {
    ensamble(): void{
        console.log('Mesa Rustica')
    }
}
class MesaVictoriana implements Mesa {
    ensamble(): void {
        console.log('Mesa Victoriana')
    }
}

class MesaModerna implements Mesa{
    ensamble(): void{
        console.log('Mesa Moderna')
    }
}

// 3. Interfaz de la Fábrica Abstracta

interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createMesa(): Mesa;
}

// 4. Clases Concretas de Fábricas
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }

  createMesa(): Mesa {
    return new MesaModerna();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }

  createMesa(): Mesa {
    return new MesaVictoriana();
  }
}

class MesaRustica implements FurnitureFactory {

  createMesa(): Mesa {
    return new MesaRustica();
  }
}


// 5. Código Cliente

function main(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const mesa = factory.createMesa();

  chair.assemble();
  sofa.recline();
  mesa.ensamble();
}

// Pruebas
console.log('Creating modern furniture:');
main(new ModernFurnitureFactory());

console.log('\nCreating victorian furniture:');
main(new VictorianFurnitureFactory());

console.log('\nCreating victorian furniture:');
main(new MesaRustica());