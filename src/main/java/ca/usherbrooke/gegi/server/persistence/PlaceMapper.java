package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.etudiant;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface PlaceMapper {

    List<Place> select(@Param("numero_chaise") int numero_chaise, @Param("numero_local") String numero_local);
    void insertPlace(@Param("place") Place place);
}
