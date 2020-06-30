package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.place;
import ca.usherbrooke.gegi.server.persistence.PlaceMapper;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.stream.JsonParser;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("")
public class PlaceService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    PlaceMapper placeMapper;

    private List<place> listePlace;

    @GET
    @Path("place")
    @Produces("application/json")
    public List<place> getPlace(@QueryParam("numero_chaise") int numero_chaise, @QueryParam("numero_local") String numero_local) {
        List<place> places = placeMapper.select(numero_chaise, numero_local);
        return places;
    }

    @GET
    @Path("places")
    @Produces("application/json")
    public List<place> getPlaces(){
        List<place> places = placeMapper.selectAll();
        return places;
    }



    private class JSONObject {
    }

   /* @Produces("text/plain")
      public String getEtudiant(@QueryParam("id") Integer id) {
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants.get(0).toString();
    }*/


    @GET
    @Path("insertPlace")
    public void insertPlace() {

        Client client = ClientBuilder.newClient();
        //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        WebTarget target = client.target("http://localhost:8080/ProjectFive/api/place");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<place> placeList = response.readEntity((new GenericType<List<place>>(){}));
        for(place pla : placeList)
        {
            placeMapper.insertPlace(pla);
            System.out.println(pla);
        }
    }
}
