package ca.usherbrooke.gegi.server.persistence;
import ca.usherbrooke.gegi.server.business.surveille;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import javax.ws.rs.QueryParam;
import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SurveilleMapper {

    List<surveille> select(@Param("idSurveillant") int idSurveillant, @Param("dateExamen") String dateExamen);
    List<surveille> selectAll();
    void insertSurveille(@Param("surveille") surveille surveille);
}
