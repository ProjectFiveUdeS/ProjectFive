package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.assis_a;
import ca.usherbrooke.gegi.server.business.examen;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ExamenMapper {

    List<examen> select(@Param("id_cours_examen") String id_cours_examen);
    List<examen> selectAll();
    void insertExamen(@Param("examen") examen examen);
}
