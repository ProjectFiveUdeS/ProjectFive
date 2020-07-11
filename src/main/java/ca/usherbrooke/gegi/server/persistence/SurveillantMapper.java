package ca.usherbrooke.gegi.server.persistence;
import ca.usherbrooke.gegi.server.business.surveillant;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import javax.ws.rs.QueryParam;
import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SurveillantMapper {

    List<surveillant> select(@Param("idSurveillant") int idSurveillant);
    List<surveillant> selectAll();
    List<surveillant> selectId(@Param("nom") String nom, @Param("prenom") String prenom);
    void insertSurveillant(@Param("surveillant") surveillant surveillant);
}
