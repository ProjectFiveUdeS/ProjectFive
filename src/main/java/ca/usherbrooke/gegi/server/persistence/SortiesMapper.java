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

    List<sorties> select(@Param("id_sortie") int id_sortie);
    List<sorties> selectAll();
    void insertSorties(@Param("sorties") sorties sorties);
}
