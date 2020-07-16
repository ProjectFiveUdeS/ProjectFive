package ca.usherbrooke.gegi.server.presentation;
import ca.usherbrooke.gegi.server.business.surveillant;
import ca.usherbrooke.gegi.server.business.surveillantUnis;
import ca.usherbrooke.gegi.server.persistence.SurveillantMapper;
import ca.usherbrooke.gegi.server.persistence.SurveillantUnisMapper;
import org.apache.ibatis.annotations.Param;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("")
public class SurveillantUnisService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    SurveillantUnisMapper surveillantMapper;

    private List<surveillantUnis> listeSurveillant;

    @GET
    @Path("surveillantUnis")
    @Produces("application/json")
    public List<surveillantUnis> getSurveillant(@QueryParam("idSurveillant") int idSurveillant) {
        List<surveillantUnis> Surveillants = surveillantMapper.select(idSurveillant);
        return Surveillants;
    }

    @GET
    @Path("tousSurveillantUnis")
    @Produces("application/json")
    public List<surveillantUnis> getTousSurveillants(){
        List<surveillantUnis> Surveillants = surveillantMapper.selectAll();
        return Surveillants;
    }

    @GET
    @Path("surveillantUnisSelectId")
    @Produces("application/json")
    public List<surveillantUnis> selectId(@Param("nom") String nom, @Param("prenom") String prenom){
        List<surveillantUnis> Surveillants = surveillantMapper.selectId(nom, prenom);
        return Surveillants;
    }

    @PUT
    @Path("insertSurveillantUnis")
    public void insertSorties(surveillantUnis Surveillant){
        surveillantMapper.insert(Surveillant);
    }
}
