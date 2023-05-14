import Register from "./register";

class App {
    activeScreen
    container

    constructor (container) {
        this.container = container;
    }

    changeActiveScreen (screen) {
        if(this.activeScreen !== undefined){
            this.container.innerHTML = "";//set lại giá trị cho container nếu đã hiện thị sig in/sign up
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}
const container = document.getElementById("app");
const login = new Login();

const app = new App();
app.changeActiveScreen(login);



export default App;