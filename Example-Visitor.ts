interface IElement{
  accept(visitor: IVisitor):void;
}

class Circle implements IElement{
  accept(visitor: IVisitor): void {
      visitor.visitCircle(this)
  }
}

class Square implements IElement{
  accept(visitor: IVisitor): void {
      visitor.visitSquare(this)
  }
}

class Triangle implements IElement{
  accept(visitor: IVisitor): void {
      visitor.visitTriangle(this)
  }
}

interface IVisitor{
  visitCircle(element: Circle): void;
  visitTriangle(element: Triangle): void;
  visitSquare(element: Square): void;
}

  class HeightCalculator implements IVisitor{
    visitCircle(circle: Circle): void{
    console.log('Holla');
  }

  visitTriangle(triangle: Triangle): void{
    console.log('Triangulo');
  }

  visitSquare(square: Square): void{
    console.log('Holla');
  } 

}   

function main():void {
  const triangle = new Triangle();
  const height = new HeightCalculator();

  triangle.accept(height);
}

main();
