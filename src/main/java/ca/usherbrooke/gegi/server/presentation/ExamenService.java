package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.examen;
import ca.usherbrooke.gegi.server.persistence.ExamenMapper;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.stream.JsonParser;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
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
public class ExamenService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    ExamenMapper examenMapper;

    private List<examen> listeExamen;

    @GET
    @Path("examen")
    @Produces("application/json")
    public List<examen> getExamen(@QueryParam("id_cours_examen") String id_cours_examen) {

        List<examen> examens = examenMapper.select(id_cours_examen);
        return examens;
    }

    @GET
    @Path("examens")
    @Produces("application/json")
    public List<examen> getExamens(){
        List<examen> examens = examenMapper.selectAll();
        return examens;
    }



    private class JSONObject {
    }

   /* @Produces("text/plain")
      public String getEtudiant(@QueryParam("id") Integer id) {
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants.get(0).toString();
    }*/


    @PUT
    @Path("insertExamen")
    public void insertExamen(examen exa) {

        /*Client client = ClientBuilder.newClient();
        //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        WebTarget target = client.target("http://localhost:8080/ProjectFive/api/examen");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<examen> examenList = response.readEntity((new GenericType<List<examen>>(){}));
        for(examen exa : examenList)
        {*/
            examenMapper.insertExamen(exa);
           // System.out.println(exa);
        //}
    }
}
