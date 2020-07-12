package ca.usherbrooke.gegi.server.presentation;
import ca.usherbrooke.gegi.server.business.surveillant;
import ca.usherbrooke.gegi.server.persistence.SurveillantMapper;
import org.apache.ibatis.annotations.Param;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("")
public class SurveillantService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    SurveillantMapper surveillantMapper;

    private List<surveillant> listeSurveillant;

    @GET
    @Path("surveillant")
    @Produces("application/json")
    public List<surveillant> getSurveillant(@QueryParam("idSurveillant") String idSurveillant) {
        List<surveillant> surveillant = surveillantMapper.select(idSurveillant);
        return surveillant;
    }

    @GET
    @Path("surveillants")
    @Produces("application/json")
    public List<surveillant> getTousSurveillants(){
        List<surveillant> surveillants = surveillantMapper.selectAll();
        return surveillants;
    }

    @GET
    @Path("surveillantSelectId")
    @Produces("application/json")
    public List<surveillant> selectId(@Param("nom") String nom, @Param("prenom") String prenom){
        List<surveillant> surveillant = surveillantMapper.selectId(nom, prenom);
        return surveillant;
    }

    @PUT
    @Path("insertSurveillant")
    public void insertSorties(surveillant surveillant){
        surveillantMapper.insertSurveillant(surveillant);
    }
}
