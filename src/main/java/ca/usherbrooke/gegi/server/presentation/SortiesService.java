package ca.usherbrooke.gegi.server.presentation;
import ca.usherbrooke.gegi.server.business.sorties;
import ca.usherbrooke.gegi.server.persistence.SortiesMapper;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
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
    @Path("selectToilette")
    @Produces("application/json")
    public List<sorties> getSortieToilette(@QueryParam("idCoursExamen") String idCoursExamen, @QueryParam("dateExamen") String dateExamen) {
        List<sorties> sorties = sortiesMapper.selectToilette(idCoursExamen, dateExamen);
        return sorties;
    }

    @GET
    @Path("toutesSorties")
    @Produces("application/json")
    public List<sorties> getToutesSorties(){
        List<sorties> sorties = sortiesMapper.selectAll();
        return sorties;
    }

    @PUT
    @Path("insertSorties")
    public void insertSorties(sorties sorties){
        sortiesMapper.insertSorties(sorties);
    }
}
