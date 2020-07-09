package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.sorties;
import ca.usherbrooke.gegi.server.persistence.SortiesMapper;

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
public class SortiesService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    SortiesMapper sortiesMapper;

    private List<sorties> listeSorties;

    @GET
    @Path("sorties")
    @Produces("application/json")
    public List<sorties> getSorties(@QueryParam("idSortie") int idSortie) {
        List<sorties> sorties = sortiesMapper.select(idSortie);
        return sorties;
    }

    @GET
    @Path("toutesSorties")
    @Produces("application/json")
    public List<sorties> getToutesSorties(){
        List<sorties> sorties = sortiesMapper.selectAll();
        return sorties;
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
    @Path("insertSorties")
    public void insertSorties(sorties sorties){

        /*Client client = ClientBuilder.newClient();
        //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        WebTarget target = client.target("http://localhost:8080/ProjectFive/api/sorties");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<sorties> sortiesList = response.readEntity((new GenericType<List<sorties>>(){}));
        for(sorties sor : sortiesList)
        {*/
        sortiesMapper.insertSorties(sorties);
        //}
    }
}
