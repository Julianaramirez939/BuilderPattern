package PizzeriaEjemplo;

public class Main {
    public static void main(String[] args) {
        PizzaBuilder builder = new PizzaHawaianaBuilder();  // Crear el Builder
        Pizzeria pizzeria = new Pizzeria(builder);  // Crear el Director
        Pizza miPizza = pizzeria.hacerPizza();  // Usar el Director para construir la pizza
        miPizza.mostrarPizza();  // Mostrar la pizza final
    }
}
