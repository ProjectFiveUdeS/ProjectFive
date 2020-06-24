package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.etudiant;
import ca.usherbrooke.gegi.server.persistence.EtudiantMapper;

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
import java.util.List;

@Path("")
public class EtudiantService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    EtudiantMapper etudiantMapper;

    private List<etudiant> listeEtudiant;

    @GET
    @Path("etudiant")
    @Produces("application/json")
    public List<etudiant> getEtudiant(@QueryParam("cip") String cip) {
      //  System.out.println(httpServletRequest.getUserPrincipal().getName());
        listeEtudiant = etudiantMapper.select(cip);

        return listeEtudiant;
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
    @Path("insertEtudiant")
    public void insertEtudiant() {

            Client client = ClientBuilder.newClient();
            //WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
            WebTarget target = client.target("http://localhost:8080/exemple-1/api/etudiant?cip=robk1234");
            Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
            Response response = builder.get();

            List<etudiant> etudiants = response.readEntity((new GenericType<List<etudiant>>(){}));
            for(etudiant etu : etudiants)
            {
                etudiantMapper.insertEtudiant(etu);
                System.out.println(etu);
            }
    }
}
