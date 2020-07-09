package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.place;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface PlaceMapper {

    List<place> select(@Param("numeroChaise") int numeroChaise, @Param("numero_local") String numero_local);
    List<place> selectAll();
    void insertPlace(@Param("place") place place);
}
