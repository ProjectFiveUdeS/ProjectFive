package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.Trimestre;
import ca.usherbrooke.gegi.server.persistence.TrimestreMapper;

import javax.inject.Inject;
import javax.naming.NamingException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("")
public class TrimestreService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    TrimestreMapper trimestreMapper;

    @GET
    @Path("trimestre")
    @Produces("application/json")

    public List<Trimestre> getTrimestre() {
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Trimestre> trimestres = trimestreMapper.select();
        return trimestres;
    }


    @PUT
    @Path("insert_trimestre")
     public void insertTrimestre(Trimestre trimestre) {
                trimestreMapper.insertTrimestre(trimestre);
            }
}
