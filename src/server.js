import { createServer } from "miragejs"
import MOCK_DATA from './Mock/MOCK_DATA';

createServer({
    seeds(server){
        server.db.loadData({
            superHeros: MOCK_DATA
        })
    },

    routes() {
        this.namespace = "api";

        this.get("/:id", (schema, request) => {
            let id = request.params.id;
            return schema.db.superHeros.find(id);
        })

        this.get("/search/:hero", (schema, request) => {
            let heroName = request.params.hero;
            return schema.db.superHeros.findBy({name: heroName})
        });
    }
})