package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.assis_a;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface AssisAMapper {

    List<assis_a> select(@Param("cip") String cip, @Param("idCoursExamen") String idCoursExamen);
    List<assis_a> selectAll();
    void insertAssisA(@Param("assisA") assis_a assisA);
}
