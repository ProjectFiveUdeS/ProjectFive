package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.etudiant;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface AssisAMapper {

    List<AssisA> select(@Param("cip") String cip, @Param("id_cours_examen") String id_cours_examen);
    void insertAssisA(@Param("assisA") AssisA assisA);
}
