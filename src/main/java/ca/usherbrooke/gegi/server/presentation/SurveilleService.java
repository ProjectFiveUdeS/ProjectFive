package ca.usherbrooke.gegi.server.presentation;
import ca.usherbrooke.gegi.server.business.surveille;
import ca.usherbrooke.gegi.server.persistence.SurveilleMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("")
public class SurveilleService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    SurveilleMapper surveilleMapper;

    private List<surveille> listeSurveille;

    @GET
    @Path("surveille")
    @Produces("application/json")
    public List<surveille> getSurveille(@QueryParam("idSurveillant") String idSurveillant, @QueryParam("dateExamen") String dateExamen) {
        List<surveille> surveille = surveilleMapper.select(idSurveillant, dateExamen);
        return surveille;
    }

    @GET
    @Path("tousSurveille")
    @Produces("application/json")
    public List<surveille> getTousSurveille(){
        List<surveille> surveille = surveilleMapper.selectAll();
        return surveille;
    }

    @PUT
    @Path("insertSurveillant")
    public void insertSorties(surveille surveille){
        surveilleMapper.insertSurveille(surveille);
    }
}
