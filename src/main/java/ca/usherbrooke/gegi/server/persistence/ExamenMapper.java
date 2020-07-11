package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.examen;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ExamenMapper {

    List<examen> select(@Param("idCoursExamen") String idCoursExamen, @Param("dateExamen") String dateExamen);
    List<examen> selectAllExamen();
    void insertExamen(@Param("examen") examen examen);
}
