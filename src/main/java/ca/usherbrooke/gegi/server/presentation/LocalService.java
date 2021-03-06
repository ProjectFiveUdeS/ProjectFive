package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.local;
import ca.usherbrooke.gegi.server.persistence.LocalMapper;

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
public class LocalService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    LocalMapper localMapper;

    private List<local> listeLocal;

    @GET
    @Path("local")
    @Produces("application/json")
    public List<local> getLocal(@QueryParam("numeroLocal") String numeroLocal) {

        List<local> locaux = localMapper.select(numeroLocal);
        return locaux;
    }

    @GET
    @Path("locaux")
    @Produces("application/json")
    public List<local> getLocaux(){
        List<local> locaux = localMapper.selectAll();
        return locaux;
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
    @Path("insertLocal")
    public void insertLocal(local loc) {

        /*Client client = ClientBuilder.newClient();
        //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        WebTarget target = client.target("http://localhost:8080/ProjectFive/api/local");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<local> localList = response.readEntity((new GenericType<List<local>>(){}));
        for(local loc : localList)
        {*/
            localMapper.insertLocal(loc);
            //System.out.println(loc);
        //}
    }
}
