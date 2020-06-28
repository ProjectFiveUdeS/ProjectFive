package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.etudiant;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SortiesMapper {

    List<Sorties> select(@Param("id_sortie") int id_sortie);
    void insertSorties(@Param("sorties") Sorties sorties);
}
