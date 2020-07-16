package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.assis_a;
import ca.usherbrooke.gegi.server.business.place;
import ca.usherbrooke.gegi.server.business.sorties;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import javax.ws.rs.QueryParam;
import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SortiesMapper {

    List<sorties> select(@Param("idSortie") int idSortie);
    List<sorties> selectAll();
    List<sorties> selectToilette(@Param("idCoursExamen") String idCoursExamen, @Param("dateExamen") String dateExamen);
    void insertSorties(@Param("sorties") sorties sorties);
    List<sorties> selectFin(@Param("idCoursExamen") String idCoursExamen, @Param("dateExamen") String dateExamen);
    List<sorties> selectToilettesSurveillant(@Param("idCoursExamen") String idCoursExamen, @Param("dateExamen") String dateExamen);
    void insertRetour(@Param("sorties") sorties sorties);
    List<sorties> selectToiletteNull(@Param("idCoursExamen") String idCoursExamen, @Param("dateExamen") String dateExamen);
}
