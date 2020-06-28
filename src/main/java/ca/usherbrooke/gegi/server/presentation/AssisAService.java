package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.assis_a;
import ca.usherbrooke.gegi.server.persistence.AssisAMapper;

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
public class AssisAService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AssisAMapper assisAMapper;

    private List<assis_a> listeAssisA;

    @GET
    @Path("assis_a")
    @Produces("application/json")
    public List<assis_a> getAssisA(@QueryParam("cip") String cip, @QueryParam("id_cours_examen") String id_cours_examen) {

        List<assis_a> assisA = assisAMapper.select(cip, id_cours_examen);
        return etudiants;
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
    @Path("insertAssisA")
    public void insertAssisA() {

        Client client = ClientBuilder.newClient();
        //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        WebTarget target = client.target("http://localhost:8080/ProjectFive/api/assis_a");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<assis_a> assis_aList = response.readEntity((new GenericType<List<assis_a>>(){}));
        for(assis_a ass : assis_aList)
        {
            assisAMapper.insertAssisA(ass);
            System.out.println(ass);
        }
    }
}
