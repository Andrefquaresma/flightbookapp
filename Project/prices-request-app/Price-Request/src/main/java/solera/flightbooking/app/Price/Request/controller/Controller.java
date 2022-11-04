package solera.flightbooking.app.Price.Request.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping(path="/welcome")
    public String welcome() {
        return "Welcome";
    }


}
